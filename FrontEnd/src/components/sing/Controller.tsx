import { PitchShifterType } from "@/types/soundtouch";
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { PitchShifter } from "soundtouchjs";
import { buffer } from 'stream/consumers';


const Controller = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [shift, setShift] = useState<any>(null)
  const audioCtx = new AudioContext();
  const gainNode = audioCtx.createGain()
  const state = audioCtx.state
  const musicRef = useRef<HTMLAudioElement>(null);
  // console.log(shift.pitch)

  console.log('시프트', shift)
  console.log('오디오 상ㅅ태', state)
  // const music = new Audio('/src/assets/sounds/꽃길.mp3')
  console.log('오디오',audioCtx)
  
  
  
  const togglePlay = () => {
    if (isPlaying) {
      musicRef.current?.pause();
      // shift.disconnect()
    } else {
      musicRef.current?.play();

    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioCtx.resume()
  }, [])

  const newShifter = (buffer) => {
    console.log('버퍼', buffer)
    const myShift = new PitchShifter(audioCtx, buffer, 16384)
    console.log('나의 시프트',myShift)
    setShift(myShift)
    myShift.pitch = 1.4
    myShift.tempo = 1
    // console.log('s나의 템포',myShift.tempo)
    myShift.connect(audioCtx.destination);
    // myShift.tempo
  }

  useEffect(() => {
    fetch("/src/assets/sounds/꽃길.mp3")
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        audioCtx.decodeAudioData(arrayBuffer, (audioBuffer: AudioBuffer) => {
          newShifter(audioBuffer);
        });
      })
      .catch(error => {
        console.error("Error decoding audio data:", error);
      });
  }, []);
  
  const PlayAudio = () => {
    if (shift) {
      shift.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      audioCtx.resume()
      setIsPlaying(true)    }
  }

  const PauseAudio = () => {
    if (shift) {
      shift.disconnect()
      if (!isPlaying) {
        setIsPlaying(false)
      }

    }
  }


  // useCallback(() => {
  //   // const buffer = new AudioBuffer()
  //   audioCtx.decodeAudioData(({audioBuffer} : {audioBuffer : AudioBuffer}) => {
  //     newShifter(audioBuffer)
  //   })
  //   // newShifter(buffer)
  // }, [])

  // const [shifter, setShifter] = useState<PitchShifter | undefined>();
  // const [pitch, setPitch] = useState<number>(1.0);
  // const [isPlaying, setIsPlaying] = useState<boolean>(false);
  // const audioRef = useRef<HTMLAudioElement>(null);
  // console.log(pitch)
  // const togglePlay = () => {
  //   if (audioRef.current) {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       audioRef.current.play();
  //       setPitch(1.0); // 재생할 때마다 pitch를 초기화
  //     }
  //     setIsPlaying(!isPlaying);
  //   }
  // };

  // const changePitch = (e: ChangeEvent<HTMLInputElement>, value: number) => {
  //   setPitch(value);
  //   if (shifter) {
  //     shifter.pitch = value;
  //   }
  // };

  // const initializeAudioContext = async () => {
  //   try {
  //     // 사용자 제스처에 반응하여 오디오 컨텍스트를 생성
  //     await new Promise<void>((resolve, reject) => {
  //       const audioCtx = new AudioContext();
  //       audioCtx.resume().then(() => {
  //         resolve();
  //       }).catch(error => {
  //         reject(error);
  //       });
  //     });

  //     // 오디오 컨텍스트 생성 후 오디오 파일 로드 및 처리
  //     const response = await fetch("/src/assets/sounds/꽃길.mp3");
  //     const audioData = await response.arrayBuffer();
  //     const decodedAudio = await audioCtx.decodeAudioData(audioData);
  //     const shifter = new PitchShifter(audioCtx, decodedAudio, 1024);
  //     setShifter(shifter);
  //   } catch (error) {
  //     console.error("오디오 컨텍스트 초기화 또는 처리 중 오류 발생:", error);
  //   }
  // };

  // useEffect(() => {
  //   initializeAudioContext();
  // }, []);

  // useEffect(() => {
  //   if (shifter) {
  //     shifter.pitch = pitch;
  //   }
  // }, [pitch, shifter]);

  return (
    <div>
      <h1>컨트롤러!!!</h1>
      <button  onClick={() => (!isPlaying? PlayAudio() : PauseAudio()) }>{!isPlaying? '재생' : '정지'}</button>
      {/* <audio ref={musicRef} id="music" src="/src/assets/sounds/꽃길.mp3"></audio> */}
      {/* <audio id="music" ref={audioRef} src="/src/assets/sounds/꽃길.mp3"></audio> */}
      {/* <button onClick={togglePlay}>{isPlaying ? "일시정지" : "재생"}</button>
      <label>피치</label>
      <input
        type="range"
        onChange={(e) => changePitch(e, parseFloat(e.target.value))}
        value={pitch}
        min="0.5"
        max="2"
        step="0.01"
        disabled={!isPlaying} // 재생 중일 때만 조절 가능하도록 설정
      /> */}
    </div>
  );
};

export default Controller;