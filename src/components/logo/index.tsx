export default function LogoDwi() {
  return (
    <>
      <div className="hidden sm:flex flex-row">
        <div className="px-3 py-1 font-bold text-tremor-content-inverted bg-dark-tremor-content-inverted border-2 border-dark-tremor-content-inverted dark:text-dark-tremor-content-inverted dark:bg-tremor-content-inverted dark:border-tremor-content-inverted">
          DWI
        </div>
        <div className="px-3 py-1 font-bold text-dark-tremor-content-inverted bg-tremor-content-inverted border-2 border-dark-tremor-content-inverted dark:text-tremor-content-inverted dark:bg-dark-tremor-content-inverted dark:border-tremor-content-inverted">
          DHARMA
        </div>
      </div>
      <div className="flex sm:hidden">
        <div className="p-1 font-bold text-tremor-content-inverted bg-dark-tremor-content-inverted border-4 border-tremor-content-inverted dark:text-dark-tremor-content-inverted dark:bg-tremor-content-inverted dark:border-dark-tremor-content-inverted">
          DD
        </div>
      </div>
    </>
  );
}
