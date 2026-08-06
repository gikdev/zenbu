import {
  ArrowArcRightIcon,
  DotsThreeVerticalIcon,
  FastForwardIcon,
  FilePlusIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
  TrashIcon,
} from '@phosphor-icons/react'
import { useSelector } from '@tanstack/react-store'
import { type ChangeEvent, type SyntheticEvent, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'

import { styleBtn } from '#/common/atoms/btn'
import { AdaptiveDialog } from '#/common/molecules/AdaptiveDialog'
import { useI18nContext } from '#/features/i18n'

import {
  type PlaybackSpeed,
  playbackSpeedValues,
  type SkipRange,
  skipRangeValues,
  songPlayerStore,
  type VolumeLevel,
  volumeLevelValues,
} from './store'
import { TimeFormatter } from './TimeFormatter'

const {
  pause,
  play,
  setPlaybackSpeed,
  setSkipRange,
  setCurrentTime,
  setSongUrl,
  setTotalTime,
  setVolumeLevel,
  setSecondTimestampType,
  changeShowMoreControls,
  reset,
} = songPlayerStore.actions

export function TimestampSongPlayer() {
  const { LL } = useI18nContext()
  const blobRef = useRef<string>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const currentTime = useSelector(songPlayerStore, s => s.currentTime)
  const isPlaying = useSelector(songPlayerStore, s => s.isPlaying)
  const songUrl = useSelector(songPlayerStore, s => s.songUrl)
  const totalTime = useSelector(songPlayerStore, s => s.totalTime)
  const playbackSpeed = useSelector(songPlayerStore, s => s.playbackSpeed)
  const skipRange = useSelector(songPlayerStore, s => s.skipRange)
  const volumeLevel = useSelector(songPlayerStore, s => s.volumeLevel)
  const secondTimestampType = useSelector(songPlayerStore, s => s.secondTimestampType)
  const showMoreControls = useSelector(songPlayerStore, s => s.showMoreControls)

  const remainingTime = totalTime == null ? null : totalTime - currentTime
  const secondTimestamp: string = (() => {
    if (secondTimestampType === 'remaining' && remainingTime != null) {
      return `-${TimeFormatter.formatSeconds(remainingTime)}`
    }

    if (secondTimestampType === 'total' && totalTime != null) {
      return TimeFormatter.formatSeconds(totalTime)
    }

    return LL.lyricsPlayer.timestampSongPlayer.notAvailable()
  })()

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      void audioRef.current.play()
    }
  }

  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement, Event>) => {
    const currentCurrentTime = +currentTime.toFixed(1)
    const nextCurrentTime = +e.currentTarget.currentTime.toFixed(1)

    if (currentCurrentTime === nextCurrentTime) return

    setCurrentTime(nextCurrentTime)
  }

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (!audioRef.current) return

    const file = e.target.files?.[0]
    if (!file) return

    blobRef.current = URL.createObjectURL(file)
    setSongUrl(blobRef.current)
    audioRef.current.src = blobRef.current
    e.target.value = ''

    toast.success(LL.lyricsPlayer.timestampSongPlayer.toastSuccess())
  }

  const handleDelete = () => {
    if (!audioRef.current) return
    pause()
    reset()
    audioRef.current.pause()
    audioRef.current.src = ''
    if (blobRef.current) {
      URL.revokeObjectURL(blobRef.current)
    }
  }

  const handleSetCurrentTime = (currentTime: number) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = currentTime
  }

  const handleRewind = () => {
    if (!audioRef.current) return
    handleSetCurrentTime(audioRef.current.currentTime - skipRange)
  }

  const handleFastForward = () => {
    if (!audioRef.current) return
    handleSetCurrentTime(audioRef.current.currentTime + skipRange)
  }

  const handleVolumeLevelChange = (volumeLevel: VolumeLevel) => {
    if (!audioRef.current) return
    setVolumeLevel(volumeLevel)
  }
  const handlePlaybackSpeedChange = (playbackSpeed: PlaybackSpeed) => {
    if (!audioRef.current) return
    setPlaybackSpeed(playbackSpeed)
  }
  const handleSkipRangeChange = (skipRange: SkipRange) => {
    if (!audioRef.current) return
    setSkipRange(skipRange)
  }

  const handleJumpToTime = () => {
    if (!audioRef.current) return
    const answer = window.prompt(LL.lyricsPlayer.timestampSongPlayer.jumpToPrompt(), currentTime.toString())
    if (!answer) return
    const converted = Number.parseFloat(answer)
    const isNan = Number.isNaN(converted)
    if (isNan) return
    handleSetCurrentTime(converted)
  }

  const handleTimestampTypeToggle = () =>
    setSecondTimestampType(secondTimestampType === 'remaining' ? 'total' : 'remaining')

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.playbackRate = playbackSpeed
  }, [playbackSpeed])

  useEffect(() => {
    if (!audioRef.current) return

    switch (volumeLevel) {
      case 'muted':
        audioRef.current.volume = 0
        break

      case 'low':
        audioRef.current.volume = 0.2
        break

      case 'medium':
        audioRef.current.volume = 0.5
        break

      case 'high':
        audioRef.current.volume = 1
        break
    }
  }, [volumeLevel])

  useEffect(() => {
    return () => {
      if (!blobRef.current) return
      URL.revokeObjectURL(blobRef.current)
    }
  }, [])

  return (
    <div className='flex w-full flex-col gap-2 p-4'>
      <div className='flex items-center justify-center gap-2'>
        <button type='button' className={styleBtn({ class: 'font-mono' })}>
          {TimeFormatter.formatSeconds(currentTime)}
        </button>

        <input
          disabled={songUrl == null}
          type='range'
          step={0.1}
          value={currentTime}
          max={totalTime || 0}
          onChange={e => handleSetCurrentTime(e.target.valueAsNumber)}
          className='accent-brand flex-1 cursor-pointer disabled:cursor-not-allowed'
        />

        <button onClick={handleTimestampTypeToggle} type='button' className={styleBtn({ class: 'font-mono' })}>
          {secondTimestamp}
        </button>
      </div>

      <div className='flex items-center justify-center gap-1'>
        {songUrl ? (
          <button
            title={LL.lyricsPlayer.timestampSongPlayer.removeAudio()}
            className={styleBtn({ variant: 'destructive', size: 'icon-lg' })}
            type='button'
            onClick={handleDelete}
          >
            <TrashIcon size={24} />
          </button>
        ) : (
          <label className={styleBtn({ size: 'icon-lg' })}>
            <FilePlusIcon size={24} />

            <input className='hidden' type='file' onChange={handleFileUpload} />
          </label>
        )}

        <button
          type='button'
          disabled={songUrl == null}
          className={styleBtn({ size: 'icon-lg' })}
          onClick={handleRewind}
        >
          <RewindIcon size={24} />
        </button>

        <button
          type='button'
          disabled={songUrl == null}
          onClick={handlePlayPause}
          className={styleBtn({
            variant: 'primary',
            size: 'icon-lg',
            class: 'rounded-full',
          })}
        >
          {isPlaying ? <PauseIcon size={24} weight='fill' /> : <PlayIcon size={24} weight='fill' />}
        </button>

        <button
          type='button'
          disabled={songUrl == null}
          className={styleBtn({ size: 'icon-lg' })}
          onClick={handleFastForward}
        >
          <FastForwardIcon size={24} />
        </button>

        <button
          type='button'
          disabled={songUrl == null}
          className={styleBtn({ size: 'icon-lg' })}
          onClick={() => changeShowMoreControls()}
        >
          <DotsThreeVerticalIcon size={24} />
        </button>
      </div>

      <AdaptiveDialog
        title={LL.lyricsPlayer.timestampSongPlayer.moreOptions()}
        isOpen={showMoreControls}
        onClose={() => changeShowMoreControls(false)}
      >
        <div className='flex flex-col gap-2'>
          <button
            type='button'
            disabled={songUrl == null}
            className={styleBtn({ variant: 'outline' })}
            onClick={handleJumpToTime}
          >
            <ArrowArcRightIcon size={20} />
            <span>{LL.lyricsPlayer.timestampSongPlayer.jumpToButton()}</span>
          </button>

          <select
            disabled={songUrl == null}
            className={styleBtn({ class: 'capitalize' })}
            value={volumeLevel}
            onChange={e => handleVolumeLevelChange(e.target.value as VolumeLevel)}
          >
            {volumeLevelValues.map(vlv => (
              <option key={vlv} value={vlv} className='bg-mist-900 text-mist-400 capitalize'>
                🔊 {LL.lyricsPlayer.timestampSongPlayer.volume[vlv]()}
              </option>
            ))}
          </select>

          <select
            disabled={songUrl == null}
            className={styleBtn({ class: 'capitalize' })}
            value={skipRange}
            onChange={e => handleSkipRangeChange(Number(e.target.value) as SkipRange)}
          >
            {skipRangeValues.map(srv => (
              <option key={srv} value={srv} className='bg-mist-900 text-mist-400 capitalize'>
                ⌛ {srv}s
              </option>
            ))}
          </select>

          <select
            disabled={songUrl == null}
            className={styleBtn({ class: 'capitalize' })}
            value={playbackSpeed}
            onChange={e => handlePlaybackSpeedChange(Number(e.target.value) as PlaybackSpeed)}
          >
            {playbackSpeedValues.map(psv => (
              <option key={psv} value={psv} className='bg-mist-900 text-mist-400 capitalize'>
                🐢 {psv}x
              </option>
            ))}
          </select>
        </div>
      </AdaptiveDialog>

      <audio
        controls
        ref={audioRef}
        className='hidden w-full'
        onLoadedMetadata={e => setTotalTime(e.currentTarget.duration)}
        onPause={() => pause()}
        onPlay={() => play()}
        onTimeUpdate={handleTimeUpdate}
        onError={e => {
          toast.error(LL.lyricsPlayer.timestampSongPlayer.toastError())
          console.log(e)
        }}
      >
        {LL.lyricsPlayer.timestampSongPlayer.audioNotSupported()}
      </audio>
    </div>
  )
}
