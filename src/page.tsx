import StatusCard from './status-card'

export default function Home() {
  return (
    <div className="p-4">
      <StatusCard
        route="מסלול 1"
        coordinates="276909.655437 x,y"
        isReady={true}
        connections={['לא מחובר', 'לא מחובר', 'לא מחובר']}
      />
    </div>
  )
}

