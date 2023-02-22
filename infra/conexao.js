import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'leandro',
    password: 'root',
    database: 'bdcopa'
})

export default conexao