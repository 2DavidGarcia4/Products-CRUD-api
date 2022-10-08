const uuidGenerator = () => {
  let uuid = []
  uuid[8] = '-', uuid[13] = '-', uuid[18] = '-', uuid[23] = '-'
  for(let i=0; i<36; i++){
    if(!uuid[i]) uuid[i] = Math.floor(Math.random()*16).toString(18)
  }
  return uuid.join('')
}

module.exports = { uuidGenerator }