const shouldDisplayError = ({ meta }) => !!(meta.error && meta.dirty && meta.touched);

export default shouldDisplayError;
