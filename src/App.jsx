import { useState } from "react"

import { Table } from "./components/3d/Table"
import TableCanvas from "./components/canvas/TableCanvas"

import lightWoodTexture from "/materials/table/legs/light-wood-texture.jpg"
import darkWoodTexture from "/materials/table/legs/dark-wood-texture.jpg"
import aluminumTexture from "/materials/table/legs/aluminum-texture.jpg"
import copperTexture from "/materials/table/legs/copper-texture.jpg"

import seaBlueMarbleTexture from "/materials/table/surface/sea-blue-marble-texture.jpg"
import purpleMarbleTexture from "/materials/table/surface/puple-marble-texture.jpg"
import orangeMarbleTexture from "/materials/table/surface/orange-marble-texture.jpg"
import darkGreenTexture from "/materials/table/surface/dark-green-marble-texture.jpg"

import { IoCheckmark } from "react-icons/io5";

function App() {

  const [table, setTable] = useState({
    surface: seaBlueMarbleTexture,
    legs: lightWoodTexture
  })

  return (
    <main className="flex flex-col items-center bg-white">
      <h1
        className="mt-20 text-6xl font-bold leading-none text-cyan-500 w-4/5 max-md:w-full max-sm:text-start max-md:px-4 text-center max-md:mt-10 max-md:max-w-full"
      >
        Unlock next-level e-commerce with intuitive viewer
        experiences.
      </h1>

      <article className="mt-7 text-lg leading-7 max-md:px-4 text-start text-zinc-900 max-md:max-w-full">
        <p>
          Cylindo Curator is a transformative commerce tool that empowers users to
          effortlessly curate an intuitive viewer
        </p>
        <p>
          experience. With it, you and your teams can seamlessly create and manage
          a consistent, dynamic 3D customer
        </p>
        <p>
          experience at scale and across your product detail pages directly from
          the Cylindo platform.
        </p>
      </article>

      <section className="my-14 flex gap-5 max-md:flex-col max-w-full w-[1143px] max-md:mt-10">
        <div className="flex flex-col w-[67%] shadow-[0px_50px_100px_rgba(48,72,87,0.05)] max-md:ml-0 max-md:w-full">
          <TableCanvas>
            <Table
              surfaceTexture={table.surface}
              legTexture={table.legs}
            />
          </TableCanvas>
        </div>

        <aside className="flex flex-col ml-5 w-[33%] items-start self-stretch my-auto max-md:mt-10 max-md:ml-0 max-md:w-full">
          <h3 className="text-3xl leading-tight capitalize text-zinc-900">
            modern table
          </h3>

          <h4 className="mt-7 text-sm capitalize leading-loose text-zinc-900">
            legs
          </h4>
          <div className="flex gap-1.5 mt-2.5">
            <label htmlFor="light-legs">
              <input
                type="radio"
                id="light-legs"
                value={lightWoodTexture}
                checked={table.legs === lightWoodTexture}
                onChange={(e) => setTable(() => ({ ...table, legs: e.target.value }))}
                name="leg-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={lightWoodTexture}
                  alt="light-legs"
                  className="rounded-sm w-8 h-8"
                /></span>
            </label>

            <label htmlFor="dark-legs">
              <input
                type="radio"
                id="dark-legs"
                value={darkWoodTexture}
                checked={table.legs === darkWoodTexture}
                onChange={(e) => setTable(() => ({ ...table, legs: e.target.value }))}
                name="leg-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={darkWoodTexture}
                  alt="dark-legs"
                  className="rounded-sm w-8 h-8"
                />
              </span>
            </label>

            <label htmlFor="aluminum-legs">
              <input
                type="radio"
                id="aluminum-legs"
                value={aluminumTexture}
                checked={table.legs === aluminumTexture}
                onChange={(e) => setTable(() => ({ ...table, legs: e.target.value }))}
                name="leg-colors"
                className="peer sr-only"
              />
              <span>
                <img
                  src={aluminumTexture}
                  alt="aluminum-leg"
                  className="rounded-sm w-8 h-8"
                /></span>
            </label>

            <label htmlFor="copper-legs">
              <input
                type="radio"
                id="copper-legs"
                value={copperTexture}
                checked={table.legs === copperTexture}
                onChange={(e) => setTable(() => ({ ...table, legs: e.target.value }))}
                name="leg-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={copperTexture}
                  alt="copper-legs"
                  className="rounded-sm w-8 h-8"
                />
              </span>
            </label>
          </div>

          <h4 className="mt-5 text-sm capitalize leading-loose text-zinc-900">
            surface
          </h4>
          <div className="flex gap-1.5 self-stretch mt-3">
            <label htmlFor="blue-surface">
              <input
                type="radio"
                id="blue-surface"
                value={seaBlueMarbleTexture}
                checked={table.surface === seaBlueMarbleTexture}
                onChange={(e) => setTable(() => ({ ...table, surface: e.target.value }))}
                name="surface-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={seaBlueMarbleTexture}
                  alt="blue-surface"
                  className="rounded-sm w-8 h-8"
                /></span>
            </label>

            <label htmlFor="purple-surface">
              <input
                type="radio"
                id="purple-surface"
                value={purpleMarbleTexture}
                checked={table.surface === purpleMarbleTexture}
                onChange={(e) => setTable(() => ({ ...table, surface: e.target.value }))}
                name="surface-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={purpleMarbleTexture}
                  alt="purple-surface"
                  className="rounded-sm w-8 h-8"
                />
              </span>
            </label>

            <label htmlFor="orange-surface">
              <input
                type="radio"
                id="orange-surface"
                value={orangeMarbleTexture}
                checked={table.surface === orangeMarbleTexture}
                onChange={(e) => setTable(() => ({ ...table, surface: e.target.value }))}
                name="surface-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={orangeMarbleTexture}
                  alt="orange-surface"
                  className="rounded-sm w-8 h-8"
                /></span>
            </label>

            <label htmlFor="green-surface">
              <input
                type="radio"
                id="green-surface"
                value={darkGreenTexture}
                checked={table.surface === darkGreenTexture}
                onChange={(e) => setTable(() => ({ ...table, surface: e.target.value }))}
                name="surface-color"
                className="peer sr-only"
              />
              <span>
                <img
                  src={darkGreenTexture}
                  alt="green-surface"
                  className="rounded-sm w-8 h-8"
                />
              </span>
            </label>
          </div>

          <div className="flex gap-2.5 mt-14 text-sm font-bold leading-5 text-zinc-900 max-md:mt-10">
            <IoCheckmark size={16} className="my-auto text-cyan-500" />
            <div>
              <h5>Hyper realistic</h5>
              <p>High-poly digital twins for HD imagery</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-6 text-sm font-bold leading-5 text-zinc-900">
            <IoCheckmark size={16} className="my-auto text-cyan-500" />
            <div>
              <h5>Dynamic visuals</h5>
              <p>Show all variations in every image</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-6 text-sm font-bold leading-5 text-zinc-900">
            <IoCheckmark size={16} className="my-auto text-cyan-500" />
            <div>
              <h5>Immersive modules</h5>
              <p>From 360 Spin, AR, and 3D models</p>
            </div>
          </div>
          <div className="flex gap-2.5 mt-6 text-sm font-bold leading-5 text-zinc-900">
            <IoCheckmark size={16} className="my-auto text-cyan-500" />
            <div>
              <h5>Mobile responsive</h5>
              <p>Supports all devices and screens</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default App