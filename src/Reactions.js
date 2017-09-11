import State from './state'

State.on('receiveNewAPIKey', function(newKeyInfo){
  State.get().set('apiKey',    newKeyInfo.key)
  State.get().set('apiSecret', newKeyInfo.secret)
})
