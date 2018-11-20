import React from 'react'

const addZeroFormat = (num) => {
  return (`0${num}`).slice(-2)
}

const getFormattedDate = (date) => {
  let year   = addZeroFormat(date.getFullYear())
  let month  = addZeroFormat(date.getMonth() + 1)
  let day    = addZeroFormat(date.getDate())
  let hour   = addZeroFormat(date.getHours())
  let min    = addZeroFormat(date.getMinutes())
  let second = addZeroFormat(date.getSeconds())

  return `${year}-${month}-${day} ${hour}:${min}:${second}`
}

const hasLogger = () => WrappedComponent => {
  const HasLogger = props => {
    const logMsg = `%cDEBUG%c ${getFormattedDate(new Date())} [${props.componentName}] [${props.transactionType}]`
    console.log(logMsg, 'color: red; font-weight: bold;', '', props)
    return <div><WrappedComponent {...props} />test</div>
  }

  return HasLogger
}

export default hasLogger