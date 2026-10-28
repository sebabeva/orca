import type { LinearIssue } from '../../../../shared/linear/issue-types'

export type LinearIssueDisplayLabel = { name: string; color?: string }

// Why: labels stays canonical; optimistic patches may not refresh labelDetails.
export function getLinearIssueDisplayLabels(
  issue: Pick<LinearIssue, 'labels' | 'labelDetails'>
): LinearIssueDisplayLabel[] {
  return issue.labels.map((name) => ({
    name,
    color: issue.labelDetails?.find((label) => label.name === name)?.color
  }))
}
