const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterAnimation(index){
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')
    gridColumns.forEach(Element => {
        Element.classList.remove('animate-before', 'animate-after')
    })

    heading.classList.remove('animate-before', 'animate-after')
}

function exitAnimation(index, exitDelay){
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(Element => {
        Element.classList.add('animate-after')
    })

    heading.classList.add('animate-after')
    
    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay)
}
function setupAnimationCycle({timePerScreen, exitDelay}){
    const cycleTime = timePerScreen + exitDelay
    let nextIndex = 0

    function nextCycle(){
        const currentIndex = nextIndex

        enterAnimation(currentIndex)

        setTimeout(() => exitAnimation(currentIndex, exitDelay), timePerScreen)
        
        nextIndex = nextIndex >= grids.length - 1 ? 0: nextIndex + 1 
    }
    nextCycle()
    setInterval(nextCycle, cycleTime)
    
    //enterAnimation(initialScreenIndex)
    //setTimeout(() => {
    //    exitAnimation(initialScreenIndex, exitDelay)
    //}, timePerScreen)
}

setupAnimationCycle({timePerScreen: 2000, exitDelay: 200*7})

