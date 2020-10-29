const fs = require('fs');

console.log("[*] Copiando banco de dados sqlite para build...");
fs.copyFile('./src/database/database.sqlite', './build/database/database.sqlite', (err) => {
  if (err){
    console.log('[!] Erro ao tentar restaurar banco de dados.');
    throw err;
  }
  console.log('[*] Banco de dados copiado com sucesso');
});