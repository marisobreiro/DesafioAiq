import analytics from '@react-native-firebase/analytics';

type EventsProps = {
  content_type: string;
  item_id: string;
};

export async function logSelectContentEvent({
  content_type,
  item_id,
}: EventsProps) {
  await analytics().logSelectContent({
    content_type: content_type,
    item_id: item_id,
  });
}
