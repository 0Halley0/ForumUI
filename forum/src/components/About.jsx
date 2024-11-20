import React from 'react'
import "../dark.css";

export default function About() {
  return (
    <div className="w-screen h-screen dark-background bg-dark-background">
      <div className="w-1/3 text-justify ml-auto mr-auto pt-8">
        <p className="text-white text-8xl font-light">about</p>
        <p className="text-white mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          enim erat, gravida id lobortis sit amet, pulvinar mollis dui. Duis
          elementum risus tellus, ac suscipit metus facilisis sed. Donec porta
          turpis lobortis pretium auctor. Vestibulum tincidunt turpis vitae
          lectus aliquet, vel aliquam nulla rhoncus. Morbi vitae nisl justo.
          Vivamus ultrices luctus eros. Donec id lacus consectetur, pulvinar dui
          sed, pretium tortor. Maecenas imperdiet elit vel ante ornare, eu
          varius mauris dignissim. Maecenas dictum laoreet tellus, sit amet
          porta sem faucibus ut. Sed nec elementum lectus.
        </p>
        <p className="text-white mt-8">
          Curabitur efficitur odio feugiat neque sollicitudin semper. In hac
          habitasse platea dictumst. In hac habitasse platea dictumst.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Maecenas lectus nulla, imperdiet in odio eu,
          tincidunt condimentum felis. Donec eu erat a felis convallis
          consectetur. Suspendisse pellentesque, lorem et molestie vehicula,
          neque ipsum sagittis quam, vel eleifend ligula magna eget dolor.
          Maecenas eu leo venenatis leo egestas ultrices ut eget erat.
          Vestibulum placerat quis tortor laoreet placerat. Nam tellus lacus,
          auctor ac eros quis, convallis interdum justo. Praesent venenatis
          vulputate ipsum a hendrerit.
        </p>
      </div>
    </div>
  );
}
