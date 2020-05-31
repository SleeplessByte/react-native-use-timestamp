import { useState, useEffect } from 'react';
import { InteractionManager } from 'react-native';
import { getCurrentTime } from 'use-timestamp';

export {
  getCurrentTime,
  useTimestamp,
  setTimeshift,
  setTime,
} from 'use-timestamp';

export function useInaccurateTimestamp({ every }: { every: number }): number {
  const [timestamp, setTimestamp] = useState(() => getCurrentTime());

  useEffect(() => {
    let active = true;

    // Doesn't update the timestamp until interactions are done
    const timeout = setTimeout(() => {
      InteractionManager.runAfterInteractions(
        () => active && setTimestamp(() => getCurrentTime())
      );
    }, every);

    return (): void => {
      active = false;
      clearTimeout(timeout);
    };
  }, [timestamp]);

  return timestamp;
}
