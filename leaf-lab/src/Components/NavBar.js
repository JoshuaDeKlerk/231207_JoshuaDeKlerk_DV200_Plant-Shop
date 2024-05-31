import '../StyleSheets/ComponentsCss/NavBar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <div className='Navbar'>
        <div className="NavSide">
            <Link to={"/Home"} className="NavLogo">
                <svg viewBox="0 0 660 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M91.8984 131.902H5.27734C2.15234 131.902 0.882812 129.754 0.882812 127.508C0.882812 125.652 1.85938 123.699 3.8125 121.648C4.49609 121.258 4.49609 120.477 4.49609 118.035V0.0664062C23.3438 1.04297 34.1836 6.41406 38.8711 15.2031C46.0977 29.2656 44.4375 35.3203 50.8828 41.082L47.6602 41.375C39.457 41.375 23.1484 39.6172 14.2617 23.7969C15.3359 28.6797 17.6797 33.3672 21.293 37.8594C24.8086 42.3516 30.082 45.2812 37.2109 46.7461V116.277H73.6367C80.8633 116.277 80.8633 111.883 84.9648 107C85.8438 106.023 87.1133 105.535 88.9688 105.535C91.4102 105.535 91.8984 106.902 91.8984 110.223V131.902ZM121.977 89.6172C137.504 89.6172 142.68 71.7461 142.68 60.5156C142.68 52.7031 140.434 44.207 133.988 41.7656C124.906 47.2344 121.781 55.9258 121.781 64.4219V89.6172H121.977ZM131.254 131.805C100.883 131.805 88.7734 105.047 88.7734 83.4648C88.7734 60.8086 101.176 34.6367 131.254 34.6367C150.395 34.6367 170.219 46.7461 170.219 68.2305C170.219 96.2578 142.191 91.4727 121.781 96.9414V115.496C121.781 123.797 133.598 127.117 137.113 127.41C137.113 98.4062 163.09 93.6211 174.125 93.6211L177.152 93.7188C165.531 104.949 175.297 119.891 155.863 128.484C150.688 130.73 142.484 131.805 131.254 131.805ZM203.52 132.293C185.941 132.293 177.641 120.77 177.25 107.488C177.25 95.7695 181.84 88.3477 189.262 82.8789C200.004 75.0664 199.809 76.8242 211.43 68.5234C214.848 65.8867 217.777 62.6641 220.023 58.8555L220.316 62.1758C220.316 70.7695 215.531 74.7734 211.039 86.1016C209.672 89.5195 208.891 93.8164 208.598 98.8945C208.598 106.512 209.184 113.543 216.02 114.91C222.855 114.91 228.324 97.918 228.324 88.6406V52.0195C228.324 43.6211 227.25 40.0078 219.34 38.8359C219.34 68.4258 192.289 72.7227 182.523 72.7227L179.301 72.5273C184.867 67.1562 184.281 59.6367 189.359 48.0156C192.973 39.9102 202.055 34.6367 219.438 34.6367C245.609 34.6367 261.039 47.5273 261.039 76.6289V117.645C261.039 120.379 261.039 121.16 261.82 121.551C263.676 123.602 264.652 125.555 264.652 127.41C264.652 129.656 263.48 131.805 260.355 131.805H235.648C231.059 131.805 228.324 127.996 228.324 124.48V117.938C220.707 124.383 216.898 132.293 203.52 132.293ZM304.594 131.805H272.855C269.828 131.805 268.656 129.656 268.656 127.41C268.656 125.555 269.633 123.602 271.684 121.551C272.367 121.16 272.367 120.379 272.367 117.938V44.4023C272.367 25.8477 289.066 16.7656 304.398 16.7656C314.066 16.7656 324.906 20.1836 332.719 29.7539C325.59 29.7539 323.441 33.7578 310.746 40.3984C307.816 41.8633 304.594 42.6445 301.078 42.6445C294.633 42.6445 287.406 39.4219 279.008 32.1953C284.965 44.6953 299.809 51.043 309.281 51.043C312.309 51.043 312.699 51.8242 312.699 55.4375C312.699 60.3203 312.406 59.7344 309.281 60.8086C305.668 62.2734 305.082 65.5938 305.082 71.0625V117.938C305.082 120.281 305.375 120.965 306.059 121.551C307.914 123.504 308.891 125.457 308.891 127.312C308.891 129.461 307.621 131.805 304.594 131.805ZM472.562 131.902H385.941C382.816 131.902 381.547 129.754 381.547 127.508C381.547 125.652 382.523 123.699 384.477 121.648C385.16 121.258 385.16 120.477 385.16 118.035V0.0664062C404.008 1.04297 414.848 6.41406 419.535 15.2031C426.762 29.2656 425.102 35.3203 431.547 41.082L428.324 41.375C420.121 41.375 403.812 39.6172 394.926 23.7969C396 28.6797 398.344 33.3672 401.957 37.8594C405.473 42.3516 410.746 45.2812 417.875 46.7461V116.277H454.301C461.527 116.277 461.527 111.883 465.629 107C466.508 106.023 467.777 105.535 469.633 105.535C472.074 105.535 472.562 106.902 472.562 110.223V131.902ZM502.934 132.293C485.355 132.293 477.055 120.77 476.664 107.488C476.664 95.7695 481.254 88.3477 488.676 82.8789C499.418 75.0664 499.223 76.8242 510.844 68.5234C514.262 65.8867 517.191 62.6641 519.438 58.8555L519.73 62.1758C519.73 70.7695 514.945 74.7734 510.453 86.1016C509.086 89.5195 508.305 93.8164 508.012 98.8945C508.012 106.512 508.598 113.543 515.434 114.91C522.27 114.91 527.738 97.918 527.738 88.6406V52.0195C527.738 43.6211 526.664 40.0078 518.754 38.8359C518.754 68.4258 491.703 72.7227 481.938 72.7227L478.715 72.5273C484.281 67.1562 483.695 59.6367 488.773 48.0156C492.387 39.9102 501.469 34.6367 518.852 34.6367C545.023 34.6367 560.453 47.5273 560.453 76.6289V117.645C560.453 120.379 560.453 121.16 561.234 121.551C563.09 123.602 564.066 125.555 564.066 127.41C564.066 129.656 562.895 131.805 559.77 131.805H535.062C530.473 131.805 527.738 127.996 527.738 124.48V117.938C520.121 124.383 516.312 132.293 502.934 132.293ZM612.895 120.184C622.367 118.816 626.176 103.777 626.176 87.1758C626.176 71.9414 623.734 57.1953 617.289 55.5352C610.648 55.5352 605.082 72.4297 605.082 81.8047V116.18C607.523 118.816 610.16 120.184 612.895 120.184ZM627.055 131.805C619.34 131.805 610.844 129.754 605.082 124.48C605.082 129.07 601.273 131.805 597.758 131.805H572.855C569.73 131.805 568.559 129.559 568.559 127.312C568.559 125.457 569.535 123.504 571.391 121.551C572.27 121.16 572.367 120.477 572.367 117.645V50.5547C579.496 49.0898 584.77 46.1602 588.285 41.668C591.801 37.1758 594.145 32.4883 595.316 27.6055C589.75 37.7617 580.863 42.3516 572.465 43.9141C568.168 44.793 564.75 45.1836 562.113 45.1836L558.891 44.8906C564.652 39.3242 564.066 32.1953 570.707 19.0117C575.297 10.2227 586.234 4.85156 605.082 3.875V52.5078C606.254 51.3359 608.988 49.0898 611.625 46.3555C620.023 38.1523 627.543 34.4414 633.793 34.4414C650.492 34.4414 659.086 59.7344 659.086 83.6602C659.086 98.1133 655.961 122.625 639.75 129.656C635.551 131.121 631.352 131.805 627.055 131.805Z" />
                </svg>
            </Link>
        </div>
        <div className="NavMid">
            <Link to={"/Home"}>
                <div className='NavItems'>
                    Home
                </div>
            </Link>
        </div>
        <div className="NavSide"></div>
      </div>
    );
  }
  
  export default Navbar;