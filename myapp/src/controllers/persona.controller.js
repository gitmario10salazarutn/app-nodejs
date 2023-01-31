import { getConnection, sql } from '../database/connection';

export const getPersonas = async (req, res) => {
    const pool = await getConnection()
    const result = await pool.request().query('SELECT*FROM persona;')
    res.json(result.recordset)
}

export const getPersonById = async (req, res) => {
    const pers_persona = req.params.pers_persona
    const query = "SELECT*FROM persona WHERE pers_persona = '" + pers_persona + "'"
    const pool = await getConnection()
    const result = await pool
        .request()
        .query(query)
    res.send(result.recordset[0])
}

export const deletePersonaById = async (req, res) => {
    const pers_persona = req.params.pers_persona
    const query = "DELETE FROM persona WHERE pers_persona = '" + pers_persona + "'"
    const pool = await getConnection()
    const result = await pool
        .request()
        .query(query)
    res.send("Person deleted!")
}

export const createNewPersona = async (req, res) => {
    const { pers_persona, pers_email, pers_nombres, pers_apellidos, pers_telefono, pers_direccion } = req.body
    console.log(req.body)
    if (pers_nombres == null || pers_persona == null || pers_apellidos == null || pers_email == null || pers_telefono == null || pers_direccion == null) {
        return res.status(400).json({ message: "Bad Request, Please fill all fields!" })
    }
    else {
        const pool = await getConnection()
        await pool.request()
            .input("pers_persona", sql.VarChar, pers_persona)
            .input("pers_email", sql.VarChar, pers_email)
            .input("pers_nombres", sql.VarChar, pers_nombres)
            .input("pers_apellidos", sql.VarChar, pers_apellidos)
            .input("pers_telefono", sql.VarChar, pers_telefono)
            .input("pers_direccion", sql.VarChar, pers_direccion)
            .query("insert into persona (pers_persona, pers_email, pers_nombres, pers_apellidos, pers_telefono, pers_direccion) values (@pers_persona, @pers_email, @pers_nombres, @pers_apellidos, @pers_telefono, @pers_direccion);")
    }
    res.json("New Person!")
}

export const updatePersona = async (req, res) => {
    const { pers_persona, pers_email, pers_nombres, pers_apellidos, pers_telefono, pers_direccion } = req.body
    console.log(req.body)
    if (pers_nombres == null || pers_persona == null || pers_apellidos == null || pers_email == null || pers_telefono == null || pers_direccion == null) {
        return res.status(400).json({ message: "Bad Request, Please fill all fields!" })
    }
    else {
        const pool = await getConnection()
        await pool.request()
            .input("pers_persona", sql.VarChar, pers_persona)
            .input("pers_email", sql.VarChar, pers_email)
            .input("pers_nombres", sql.VarChar, pers_nombres)
            .input("pers_apellidos", sql.VarChar, pers_apellidos)
            .input("pers_telefono", sql.VarChar, pers_telefono)
            .input("pers_direccion", sql.VarChar, pers_direccion)
            .query("update persona set pers_email = @pers_email, pers_nombres = @pers_nombres, pers_apellidos = @pers_apellidos, pers_telefono = @pers_telefono, pers_direccion = @pers_direccion where pers_persona = @pers_persona;")
    }
    res.json("New Person!")
}

