import { useSelector } from "@tanstack/react-store";
import { songPlayerStore } from "../timestamp-song-player";
import { useRef, useState } from "react";
import { Lyric } from "../lyric/Lyric";
import { UploadSimpleIcon } from "@phosphor-icons/react";
import { styleBtn } from "#/common/atoms/btn";
import { cn } from "tailwind-variants";
import { LyricMetadataCard } from "../lyrics-editor/LyricMetadataCard";

export function PhrasePlayer() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [lyric, setLyric] = useState<Lyric | null>(null);
  const currentTime = useSelector(songPlayerStore, (s) => s.currentTime);
  const currentBlock = lyric?.getCurrentBlock(currentTime)

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonString = event.target?.result as string;
        const newLyricResult = Lyric.create(jsonString);

        if (newLyricResult.isErr()) {
          throw new Error(newLyricResult.error);
        }

        setLyric(newLyricResult.value);
      } catch (err) {
        alert(`Failed to load lyric: ${(err as Error).message}`);
      } finally {
        // Reset input so the same file can be re-uploaded
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    };
    reader.onerror = () => {
      alert("Failed to read file");
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex-1 flex flex-col gap-8 items-center justify-center">
      {lyric && (
        <LyricMetadataCard metadata={lyric?.metadata} />
      )}

      {lyric ? (
        <div className="">
          {currentBlock ? (
            <div className="text-center">
              <p dir="auto" lang="ja" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'ja' })}>{currentBlock.ja}</p>
              <p dir="auto" lang="en" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'rj' })}>{currentBlock.rj}</p>
              <p dir="auto" lang="fa" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'ar' })}>{currentBlock.ar}</p>
              <p dir="auto" lang="en" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'en' })}>{currentBlock.en}</p>
              <p dir="auto" lang="en" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'es' })}>{currentBlock.es}</p>
              <p dir="auto" lang="fa" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'fa' })}>{currentBlock.fa}</p>
              <p dir="auto" lang="en" className={cn('use-lang-font', {'text-text-important text-2xl': (currentBlock.defaultLanguageOverride ?? lyric.settings.defaultLanguage) === 'tx' })}>{currentBlock.tx}</p>
            </div>
          ) : <p>-</p>}
        </div>
      ) : (
      <div className="flex-1 flex items-center justify-center flex-col">
        <button
          type="button"
          className={styleBtn({ variant: "primary" })}
          onClick={handleUploadClick}
        >
          <UploadSimpleIcon size={20} />
          <span>Upload JSON Config to Start</span>
        </button>

        <input
          type="file"
          accept=".json,application/json"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      )}
    </div>
  );
}
