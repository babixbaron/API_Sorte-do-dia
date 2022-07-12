const SorteDeHojeModel = require('../models/sorteDeHoje')

const createSorte = async (req, res) => {
    try {
        const {text} = req.body

        const newSorte = new SorteDeHojeModel({
            text
        })

        const savedSorte = await newSorte.save()

        res.status(201).json(savedSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message})
    }
}

const findAllSortes = async (req, res) => {
    try {
        const allSorte = await SorteDeHojeModel.find()
        res.status(200).json(allSorte)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createSorte,
    findAllSortes
}