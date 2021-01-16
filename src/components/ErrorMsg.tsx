const ErrorMsg = () => {
  return (
    <div className="flex justify-center my-8">
      <p className="text-white font-mono text-xl text-center pt-2">
        存在しない地名です。（地名はローマ字で入力してください | Ex.Tokyo ）
      </p>
    </div>
  );
};

export default ErrorMsg;
