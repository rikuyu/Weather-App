const ErrorMsg = () => {
  return (
    <div className="flex justify-center my-8">
      <p className="text-white font-bold font-mono text-xl text-center pt-2">
        存在しない地名です。
        <br />
        （地名はローマ字で入力 Ex.Tokyo ）
      </p>
    </div>
  );
};

export default ErrorMsg;
