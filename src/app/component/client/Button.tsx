'use client';

export function CopyButton({ text }: { text: string }) {
    return (
        <button
            type="button"
            className="button-copy"
            onClick={() => {
                navigator.clipboard.writeText(text);
                //toast 라이브러리 사용검토
                alert("읽어주셔서 감사합니다. 복사되었습니다.");
            }}
        >
            {text}
        </button>
    );
}