
import { Handle, Position } from 'reactflow';

const Handles = ({
  id,
  hasTarget = false,
  hasSource = false,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}) => (
  <>
    {hasTarget && (
      <Handle
        type="target"
        position={targetPosition}
        id={`${id}-input`}
        style={{
          top: '25%',
          width: '15px',
          height: '15px',
          backgroundColor: '#7402e2',
          borderRadius: '50%',
        }}
      />
    )}
    {hasSource && (
      <Handle
        type="source"
        position={sourcePosition}
        id={`${id}-output`}
        style={{
          top: '25%',
          width: '15px',
          height: '15px',
          backgroundColor: '#7402e2',
          borderRadius: '50%',
        }}
      />
    )}
  </>
);

export default Handles;
