/**
 * Pico's Default Theme - JavaScript helper
 *
 * Pico is a stupidly simple, blazing fast, flat file CMS.
 *
 * @author  Daniel Rudolf
 * @link    http://picocms.org
 * @license http://opensource.org/licenses/MIT The MIT License
 * @version 2.1
 */

function main2()
{
    // capability CSS classes
    document.documentElement.className = 'js';

    // responsive menu
    var menu = document.getElementById('nav2');
    var menuToggle = document.getElementById('nav2-toggle');
    var navIcon = document.getElementById('toggler2');
    toggleMenuEvent = function (event) {
            if (event.type === 'keydown') {
                if ((event.keyCode != 13) && (event.keyCode != 32)) {
                    return;
                }
            }

            event.preventDefault();

            if (menuToggle.getAttribute('aria-expanded') === 'false') {
                menuToggle.setAttribute('aria-expanded', 'true');
                navIcon.className = 'fa fa-times';
                menu.className = 'side-nav';

                utils.slideDown(menu, null, function () {
                    if (event.type === 'keydown') {
                        menu.focus();
                    }
                });
            } else {
                navIcon.className = 'fa fa-bars';
                menuToggle.setAttribute('aria-expanded', 'false');
                menu.className = 'side-nav';
                utils.slideUp(menu);
            }
        };
        onResizeEvent = function () {
            if (utils.isElementVisible(menuToggle)) {
                menu.className = 'hidden';
                navIcon.className = 'fa fa-bars';
                menuToggle.addEventListener('click', toggleMenuEvent);
                menuToggle.addEventListener('keydown', toggleMenuEvent);
            } else {
                menu.className = 'side-nav';
                navIcon.className = 'fa fa-times';
                menu.removeAttribute('data-slide-id');
                menuToggle.removeEventListener('click', toggleMenuEvent);
                menuToggle.removeEventListener('keydown', toggleMenuEvent);
            }
        };

    window.addEventListener('resize', onResizeEvent);
    onResizeEvent();
}

main2();
