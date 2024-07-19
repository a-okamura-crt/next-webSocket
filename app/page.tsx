
"use client"

import Image from "next/image";
import { useCallback, useEffect, useState, useRef } from "react";
import { isTypeA, formatSocketMessageData, isTypeB } from '../types/types'

export default function Home() {

  const socketRef = useRef(new WebSocket('ws://127.0.0.1:5001'));

  // Aパターンの件数
  const [ACount, setACount] = useState<number>(0);
  // Bパターンの件数
  const [BCount, setBCount] = useState<number>(0);

  useEffect(() => {
    // 接続
    socketRef.current.onopen = (e) => {
        console.log('Socket 接続成功');
    };
  
    // サーバーからデータを受け取る
    socketRef.current.onmessage = (e) => {
        const data = JSON.parse(e.data);
        console.log(data)
        if (formatSocketMessageData(data)) {
          if (isTypeA(data.type)) {
            console.log("type_a");
            setACount(value => value+1);
          } else if (isTypeB(data.type)) {
            console.log("type_b");
            setBCount(value => value+1);
          }
        }
    };
  }, [])
  

  // TypeAを実行
  const type_a_exec = useCallback(() => {
    socketRef.current.send('check_in')
  }, []);
  
  // TypeBを実行
  const type_b_exec = useCallback(() => {
    socketRef.current.send('')
  }, []);

  // TypeAの画面を表示
  const reset_type_a = useCallback(() => {
    setACount(0);
  }, []);

  // TypeBの画面を表示
  const reset_type_b = useCallback(() => {
    setBCount(0);
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex">
          <div className="relative">
            <div className="relative top-0">
              <button  onClick={reset_type_a}>open_type_a</button>
              {ACount > 0 && (<div className="absolute rounded-full bg-red-700 w-5 h-5 text-center text-white">{ACount}</div>)}
            </div>
            <div className="relative top-10">
              <button  onClick={reset_type_b}>open_type_b</button>
              {BCount > 0 && (<div className="absolute rounded-full bg-red-700 w-5 h-5 text-center text-white">{BCount}</div>)}
            </div>
          </div>
          <div className="pl-10">
            <button className="block" onClick={type_a_exec}>type_a_exec</button>
            <button className="block" onClick={type_b_exec}>type_b_exec</button>
          </div>
        </div>
      </div>
    </main>
  );
}
