const book = require('../models/book');

exports.getAllbooks = async (req, res) => {
        try {
        const books = await book.find({});
        return res.status(200).json({ books });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al obtener los libros',
            error: error.message
        })
    }
}

exports.createbook = async (req, res) => {
    try {
        const { name, author, price } = req.body;
        const newbook = await book.create({ name, author, price });
        if (!newbook) return res.status(400).json({ error: 'No se pudo crear el libro' });
        return res.status(201).json({ datos: newbook });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error al crear el libro',
            error: error.message
        })
    }
}

exports.updatebookById = async (req, res) => {
    try {
        const { name,author, price } = req.body;
        const updatedbook = await book.findByIdAndUpdate(
            req.params.id,
            { name,author, price},
            { new: true, runValidators: true }
        );
        if (!updatedbook) return res.status(404).json({ message: 'libro no encontrado' });
        return res.status(200).json({ bookraActualizada: updatedbook });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error actualizando el libro',
            error: error.message
        })
    }
}

exports.deletebookById = async (req, res) => {
    try {
        const deletedbook = await book.findByIdAndDelete(req.params.id);
        if (!deletedbook) return res.status(404).json({ message: 'Libro no encontrado' });
        return res.status(200).json({ message: 'El libro se elimino correctamente' });
    } catch (error) {
        return res.status(500).json({
            message: 'Hubo un error eliminando el libro',
            error: error.message
        })
    }
}