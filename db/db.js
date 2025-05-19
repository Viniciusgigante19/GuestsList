const { connect } = require('http2');
const mysql = require('mysql2');

const connectMYSQL = async ()=>{

    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Diamante404#'
    });


    await db.query('CREATE DATABASE IF NOT EXISTS guests');

    await db.changeUser({database:'guests'})

    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS guest (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL
        )
    `;

        await db.query(createTableSQL);
        
        console.log("Banco e tabela criados!");
    }

