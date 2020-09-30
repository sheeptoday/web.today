/** App Core
 *  Last revision: 2019.9.6
 */


//  -------------------------------- AppKing

function AppKing(mRna) {

/* ༼°▽°༽ app the king
    2019.9.5
 */
 // The Noble Blastula
    let app = this
    app.has = { memory: [], activity:true }

 // Construction workers
    const proteinMergeRoots = () =>
          app = Object.assign(
                app,
                mRna
          )
    const proteinRememberAll = function ReadMemory () {
       // first in, first out
          let reading = (task)=>DelegateTask(task)
          while (app.has.memory.length) {
              let mem = app.has.memory.splice(0, 1)
              mem.map(reading)
          }
    }
    const proteinWakeUp = function initialization () {
          app.attach    = TakeTheQueen
          app.update    = UpdateQueens
    }
    const proteinPrimaryQueens = function configuration () {
          app.onload    = Queen_onload
    }

 // Define responsibility
    const DelegateTask = (task) => app[task.for](task.dna)
    const TakeTheQueen = (name) => (f) => app[name] = f
    const UpdateQueens = (dna)  => app[dna.name]=dna.f

 // Primary Queens
    const Queen_onload = (dna)  => typeof(dna)==='function' ? dna() : false

 // Apply responsibility
    proteinMergeRoots()
    proteinWakeUp()
    proteinPrimaryQueens()
    proteinRememberAll()
}


//  -------------------------------- AppKing autorun


function appLauncher () { if (app) app = new AppKing(app) }
if (window.addEventListener) window.addEventListener("load", appLauncher, false);
else if (window.attachEvent) window.attachEvent("onload", appLauncher);
else                         window.onload = appLauncher;


//  EOF app core
