import React from 'react'
import "../dark.css";

export default function About() {
  return (
    <div className="min-w-screen min-h-screen h-full dark-background bg-dark-background">
      <div className="sm:w-2/3 lg:w-2/3 xl:w-1/3 text-justify ml-auto mr-auto pt-8">
        <p className="text-white text-5xl sm:text-8xl mt-16 font-light">about</p>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          enim erat, gravida id lobortis sit amet, pulvinar mollis dui. Duis
          elementum risus tellus, ac suscipit metus facilisis sed. Donec porta
          turpis lobortis pretium auctor. 
        </p>
      </div>
    </div>
  );
}
