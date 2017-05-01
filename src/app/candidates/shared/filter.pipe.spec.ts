import { CandidateFilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CandidateFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
