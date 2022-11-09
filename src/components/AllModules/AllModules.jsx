import TrailsModules from '../TrailsModules/TrailsModules'
import s from '/src/components/AllModules/AllModules.module.css'



export default function AllModules() {
  const data = {
    name: 'Desenvolvimento FullStack'
  }
  return (
    <div className={s.container}>
      <h2 className={s.h2}>Seja bem vindo (a) à trilha sobre {data.name}!</h2>
      <h4 className={s.h4}>Conteúdos:</h4>
      <TrailsModules />
    </div>
  )
}
