const {
    AppError,
    catchAsync,
    sendResponse,
} = require("../helpers/utils.helper");
const Game = require("../models/Game");

const gameController = {};

gameController.create = catchAsync(async (req, res, next) => {
    try {
        const game = new Game({ ...req.body })
        await game.save()
        sendResponse(res, 201, true, { game }, "Create game successfully")
    } catch (error) {
        console.log('Nam')
        res.status(400).json({
            success: false,
            error: error.message,
        });
    }
});


gameController.list = catchAsync(async (req, res, next) => {
    const games = await Game.find({}).limit(50)
    // const games = ["Nam", "Loi", "Khoa"]
    sendResponse(res, 201, true, { games }, null, "Get all games successfully")
});

gameController.viewDetailedPage = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const game = await Game.findOne({ _id: id });
    // await games.populate("reviews").populate("ratings");
    sendResponse(res, 201, true, { game }, "Individual Game");
});

gameController.update = catchAsync(async (req, res, next) => {
    try {
        const game = await Game.findByIdAndUpdate(req.params.id,
            { body: req.body },
            { new: true, }
        );
        game.save()
        sendResponse(res, 201, true, { game }, 'Update game successfully'
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});

gameController.delete = catchAsync(async (req, res, next) => {
    try {
        const Game = await Game.findByIdAndDelete(req.params.id);
        sendResponse(res, 201, true, { game }, 'Delete game successfully'
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            error: err.message,
        });
    }
});

module.exports = gameController;
