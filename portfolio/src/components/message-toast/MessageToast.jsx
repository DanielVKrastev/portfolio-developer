import { useEffect } from "react";

export default function MessageToast({
    message,
    onClose
}) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(false);
        }, 5000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="fixed inset-x-0 top-20 pb-2 sm:pb-5 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className={`rounded-lg ${message.type === 'success'? 'bg-default-600' : 'bg-rose-600'} p-2 shadow-2xl sm:p-3`}>
                    <div className="flex flex-wrap relative items-center justify-between">
                        <div className="flex p-2 flex-1 items-center font-medium text-white">
                            {message.content}
                        </div>
                        <button
                            className="absolute -top-2 -right-2 hover:text-gray-100"
                            onClick={() => onClose()}
                        >
                            <span className="sr-only">Dismiss</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-6 w-6 text-white"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}