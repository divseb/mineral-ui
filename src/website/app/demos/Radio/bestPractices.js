/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import DemoForm from './components/DemoForm';
import { FormField } from '../../../../Form';
import { RadioGroup } from '../../../../Radio';

export default {
  radio: [
    {
      type: 'do',
      description: `Begin labels with a capital letter.`,
      example: (
        <DemoForm>
          <RadioGroup
            name="options"
            data={[
              { label: 'Option 1', value: '1' },
              { label: 'Option 2', value: '2' },
              { label: 'Option 3', value: '3' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Don't use punctuation at the end of each line if the label
is a single sentence, word, or fragment.`,
      example: (
        <DemoForm>
          <RadioGroup
            name="options"
            data={[
              { label: 'Option 1', value: '1' },
              { label: 'I strongly agree', value: 'agree' },
              { label: 'Apple', value: 'apple' }
            ]}
          />
        </DemoForm>
      )
    }
  ],
  radioGroup: [
    {
      type: 'do',
      description: `Use when the number of choices is relatively small.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="none"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' },
              { label: 'None', value: 'none' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Use caution when determining a default selection.  Don't
make assumptions about your users choices.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="telephone"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'do',
      description: `Use caution when determining a default selection.  Provide
a neutral option.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="none"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' },
              { label: 'None', value: 'none' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Don't use when the user should be able to select multiple
options. Use a [Checkbox](../checkbox) instead.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="wants"
            label="What do you want in a component library?"
            defaultChecked="none"
            data={[
              { label: 'Simplicity', value: 'simplicity' },
              { label: 'Quality', value: 'quality' },
              { label: 'Speed', value: 'speed' }
            ]}
          />
        </DemoForm>
      )
    }
  ]
};
