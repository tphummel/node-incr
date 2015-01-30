module.exports = Increment

function Increment (opts) {
  opts = opts ? opts : {}

  this.radix = opts.radix || 10
  this.start = opts.start || 0

  this.position = this.start

  return this
}

Increment.prototype.next = function(){
  this.position += 1

  if(this.radix !== 10){
    return this.position.toString(this.radix)
  }else{
    return this.position
  }
}

Increment.prototype.reset = function(){
  if(this.position > 0){
    this.position = 0
    return true
  }else{
    return false
  }
}
