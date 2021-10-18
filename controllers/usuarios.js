const { request, response } = require('express');

const Usuario = require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey,
        page,
        limit,
    });
}

const usuariosPost = async (req = request, res = response) => {
    const body = req.body;
    const usuario = new Usuario(body);

    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}

const usuariosPut = (req = request, res = response) => {

    const id = req.params.id;

    res.json({
        msg: 'put API - usuariosPut',
        id,
    });
}

const usuariosPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch',
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete',
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}