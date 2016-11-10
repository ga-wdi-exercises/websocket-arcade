angular
  .module("connect4", [])
  .config("ngResource")
  .controller("BoardController", [
    "$scope",
    BoardControllerFunction
  ])

function BoardControllerFunction($scope){
  vm = this
  vm.pieces = []
  vm.createPiece = function(x,y,color) {
    let newPiece = {}
    newPiece.x = x
    newPiece.y = y
    newPiece.color = color
    socket.emit('add piece', newPiece)
  }
  socket.on('add piece', piece => {
    vm.pieces.push(piece)
    $scope.$apply()
  })
}
