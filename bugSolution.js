```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log('API call:', count); 
    };
    fetchData();
    return () => {
      console.log('Cleanup function running');
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>
    </div>
  );
}
```