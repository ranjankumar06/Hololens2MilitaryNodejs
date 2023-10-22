const playerModel = require("../Model/userModel")

exports.createPlayer = async (req, res) => {
    try {
        const { data } = req.body;
        console.log(req.body)
        const locationData = await playerModel.find({});
        // console.log("length", data.length)
        if (locationData.length == 0) {

            const playerData = await playerModel.create({
                data: data

            })
            res.status(200).json({ success: true, message: "Created successfully !", return: playerData });

        }
        else {
            const deleteData = await playerModel.findOneAndDelete({});
            const playerData = await playerModel.create({
                data: data,
            })
            res.status(200).json({ success: true, message: "Created successfully !", return: playerData });
        }
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};


exports.getAllplayers = async (req, res) => {
    try {
        const data = await playerModel.find();

        var tosend = null;
        if (data.length > 0) {
            tosend = data[0].data
        }
        res.status(400).json({ success: true, message: "Get successfully !", data: tosend });
    } catch (e) {
        console.log(e);
        res.send(e);
    }
}