import React, { useCallback, useState } from 'react'
import BIRDS_DATA from '../../data/birds'
import AUDIO_SRC from '../../data/audioSrc'
import getRandomNumber from '../../utils/getRandomNumber'
import { BIRD_GROUPS, MAX_POINTS_ROUND } from '../../data/constants'

import Header from '../header'
import GameScreen from '../game-screen'
import FinishScreen from '../finish-screen'
import GroupsList from '../groups-list'

const setBirdGroups = (currNumber) =>
  BIRD_GROUPS.map((group, idx) => ({
    title: group,
    key: group,
    isActive: idx === currNumber,
  }))

const setBirdItems = (currNumber) =>
  BIRDS_DATA[currNumber].map((birdItem) => ({
    ...birdItem,
    answerStatus: 'inactive',
  }))

const toggleActiveGroup = (groups, groupToBeActive) =>
  groups.map((group) => {
    const newGroup = group
    newGroup.isActive = newGroup.title === groupToBeActive
    return newGroup
  })

const App = () => {
  const [currNumberOfGroup, setCurrNumberOfGroup] = useState(0)
  const [groups, setActiveGroup] = useState(setBirdGroups(currNumberOfGroup))
  const [birdGroupData, setAnswersStatus] = useState(
    setBirdItems(currNumberOfGroup),
  )

  const [currNumberOfHiddenBird, setNumbOfHiddenBird] = useState(
    getRandomNumber(0, birdGroupData.length - 1),
  )
  const [currNumberOfClickedBird, setNumbOfClickedBird] = useState(0)
  const [generalScore, setGeneralScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(groups.length - 1)

  const [isGameFinished, setGameFinished] = useState(false)
  const [isQuestionLast, setQuestionLast] = useState(false)
  const [isQuestionOpen, setQuestionState] = useState(true)
  const [isAnswerEverClicked, setAnswerClicked] = useState(false)

  const handleNextClick = () => {
    if (isQuestionLast) {
      setGameFinished(true)
    } else {
      setQuestionState(true)
      setAnswerClicked(false)
      setCurrentScore(groups.length - 1)
      setCurrNumberOfGroup(currNumberOfGroup + 1)
      setActiveGroup(
        toggleActiveGroup(groups, BIRD_GROUPS[currNumberOfGroup + 1]),
      )
      setAnswersStatus(setBirdItems(currNumberOfGroup + 1))
      setNumbOfHiddenBird(getRandomNumber(0, birdGroupData.length - 1))
      if (currNumberOfGroup === groups.length - 2) {
        setQuestionLast(true)
      }
    }
  }

  const handleAnswerClick = (birdName) => {
    const resultSound = new Audio()

    const newBirdGroupData = birdGroupData.map((birdItem) => {
      if (birdItem.name === birdName) {
        setNumbOfClickedBird(birdItem.id - 1)

        if (isQuestionOpen) {
          if (birdItem.name !== birdGroupData[currNumberOfHiddenBird].name) {
            resultSound.src = AUDIO_SRC.fail
            birdItem.answerStatus = 'wrong'
            setCurrentScore(currentScore - 1)
          } else {
            setGeneralScore(generalScore + currentScore)
            resultSound.src = AUDIO_SRC.win
            birdItem.answerStatus = 'right'
            setQuestionState(false)
          }
        }
      }
      return birdItem
    })

    resultSound.play()
    setAnswersStatus(newBirdGroupData)
    if (!isAnswerEverClicked) setAnswerClicked(true)
  }

  const handleRestartGame = useCallback(() => {
    setCurrNumberOfGroup(0)
    setActiveGroup(setBirdGroups(0))
    setAnswersStatus(setBirdItems(0))

    setNumbOfHiddenBird(getRandomNumber(0, birdGroupData.length - 1))
    setNumbOfClickedBird(0)
    setGeneralScore(0)
    setCurrentScore(groups.length - 1)

    setGameFinished(false)
    setQuestionLast(false)
    setQuestionState(true)
    setAnswerClicked(false)
  }, [])

  return (
    <div className="container mb-5">
      <div className="row">
        <Header score={generalScore} />

        <GroupsList birdGroups={groups} />

        {!isGameFinished ? (
          <GameScreen
            birdGroupData={birdGroupData}
            isQuestionOpen={isQuestionOpen}
            isAnswerEverClicked={isAnswerEverClicked}
            currNumberOfClickedBird={currNumberOfClickedBird}
            currNumberOfHiddenBird={currNumberOfHiddenBird}
            handleAnswerClick={handleAnswerClick}
            handleNextClick={handleNextClick}
          />
        ) : (
          <FinishScreen
            generalScore={generalScore}
            bestScore={groups.length * MAX_POINTS_ROUND}
            handleRestartGame={handleRestartGame}
          />
        )}
      </div>
    </div>
  )
}

export default App
