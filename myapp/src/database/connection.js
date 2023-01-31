import sql from 'mssql'
import { config } from "dotenv"

const dbsettings = {
    name: process.env.NAME,
    server: process.env.SERVER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    }
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbsettings)
        return pool
    } catch (err) {
        console.error(err);
    }
}

export { sql }