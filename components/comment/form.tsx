import { useAuth0 } from "@auth0/auth0-react";

type CommentFormProps = {
  text: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setText: Function;
  onSubmit: (e: React.FormEvent) => Promise<void>;
};

export default function CommentForm({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

    return (
    <form onSubmit={onSubmit}>
      <textarea
        className="flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500"
        rows={2}
        placeholder={
          isAuthenticated
            ? `What are your thoughts?`
            : "Please login to leave a comment"
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className="flex items-center mt-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-6">
            <button className="py-2 px-4 rounded dark:bg-neutral-600 bg-neutral-400 text-white hover:bg-neutral-600 disabled:opacity-40 dark:hover:bg-neutral-700">
              Send
            </button>
            <button
              className="text-gray-500"
              onClick={() => logout({ logoutParams: {
                  redirect: window.location.origin
                }})}
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="py-2 px-4 rounded dark:bg-neutral-600 bg-neutral-400 hover:bg-neutral-600 text-white disabled:opacity-40 dark:hover:bg-neutral-700"
            onClick={() => loginWithPopup()}
          >
            Log In
          </button>
        )}
      </div>
    </form>
  );
}
