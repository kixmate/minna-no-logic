// app/page.tsx

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          みんなのロジック
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          みんなのロジックは、さまざまなテーマに対して、
          賛成・反対の意見を構造的に整理しながら考えを深める場所です。
        </p>
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="text-sm text-gray-600">
            トピックを選んで、みんなで意見を交わしましょう。
          </p>
        </div>
      </div>
    </main>
  );
}
