import { createSelector} from "reselect";

const selectDirectories = (state) => state.directory

export const selectDirectorySections = createSelector(selectDirectories,(directory) => directory.sections)