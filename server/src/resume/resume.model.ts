import { getModelForClass, prop } from '@typegoose/typegoose';
class Resume {
  @prop()
  homepage: string;
  @prop()
  education: [];
}

export const ResumeModel = getModelForClass(Resume);
