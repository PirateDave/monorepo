import { Colors, Radiuses, Spacings } from '@monorepo/expo/shared/static';
import { TextRegular } from '@monorepo/expo/shared/ui-components';
import { usePathname, useRouter } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';
import { NotesQuery } from '../../apollo';
import NoteCardClient from './NoteCardClient';
import NoteCardHeader from './NoteCardHeader';
import NoteCardIcons from './NoteCardIcons';

interface INoteCardProps {
  note: NotesQuery['notes'][0];
}

export default function NoteCard(props: INoteCardProps) {
  const { note } = props;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      onPress={() =>
        router.navigate({
          pathname: `/note/${note.id}`,
          params: { arrivedFrom: pathname },
        })
      }
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? Colors.GRAY_PRESSED : Colors.WHITE,
        },
      ]}
    >
      <NoteCardHeader title={note.title} interactedAt={note.interactedAt} />
      <NoteCardClient client={note.client} isSubmitted={note.isSubmitted} />
      <TextRegular numberOfLines={2} ellipsizeMode="tail" size="sm">
        {note.publicDetails}
      </TextRegular>
      {(note.moods.length > 0 ||
        note.providedServices.length > 0 ||
        note.requestedServices.length > 0) && (
        <NoteCardIcons
          icons={[
            ...note.moods,
            ...note.providedServices,
            ...note.requestedServices,
          ]}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacings.sm,
    gap: Spacings.xs,
    borderRadius: Radiuses.xs,
  },
});
