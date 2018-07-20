import React from 'react'

const MissionFiles = ({names}) => {
console.log(names)
return names.map(name => <div><span>{name}</span></div>)
}

export default MissionFiles
