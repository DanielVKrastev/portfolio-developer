export default function LoadingSpinner() {
    return (
        <div className="flex-col gap-4 w-full flex items-center justify-center h-dvh">
            <div className="w-20 h-20 border-4 border-transparent text-default-400 text-4xl animate-spin flex items-center justify-center border-t-default-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-default-700 text-2xl animate-spin flex items-center justify-center border-t-default-700 rounded-full" />
            </div>
        </div>

    );
}