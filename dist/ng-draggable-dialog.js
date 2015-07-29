angular.module('ng-draggable-dialog', [])
    .directive('draggableDialog', function ($document) {
        return {
            restrict: 'A',
            link : function(scope, element) {
                var startX = 0, startY = 0, x = 0, y = 0;
                var header = $(".modal-header", element);
                var dialog = $(".modal-dialog", element);
                element.css({position: 'fixed'});
                header.css({cursor: 'move'});
                header.on('mousedown', function (event) {
                    event.preventDefault();
                    startX = event.screenX - x;
                    startY = event.screenY - y;
                    $document.on('mousemove', mousemove);
                    $document.on('mouseup', mouseup);
                });
                function mousemove(event) {
                    y = event.screenY - startY;
                    x = event.screenX - startX;
                    dialog.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
                }
                function mouseup() {
                    $document.unbind('mousemove', mousemove);
                    $document.unbind('mouseup', mouseup);
                }
            }
        }
    });