const baseURL = process.env.NODE_ENV == 'dev' ? './src' : './build'
const type = process.env.NODE_ENV == 'dev' ? '*.ts' : '*.js'

module.exports = {
  type: 'sqlite',
  database: `${baseURL}/database/database.sqlite`,
  entities: [`${baseURL}/models/${type}`],
  migrations: [`${baseURL}/database/migratinos/${type}`],
  cli: {
    migrationsDir: `${baseURL}/database/migrations`,
  },
}