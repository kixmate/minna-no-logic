import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Topic {
  id: string;
  title: string;
  description: string;
}

export default function TopicList() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'topics'));
        const topicsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Topic[];
        setTopics(topicsData);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">トピック一覧</h1>
      <ul className="space-y-4">
        {topics.map(topic => (
          <li key={topic.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="text-gray-600">{topic.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
